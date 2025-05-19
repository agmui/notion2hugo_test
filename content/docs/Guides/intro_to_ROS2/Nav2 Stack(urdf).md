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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYUTIJG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT8GqrqQIvytB0fzdV%2Fk97Xw8JLxZyvAiQcgYJna3IhAiACJQfyfX%2BqyMbIm6115TtUSfUfVKavV6sU2P85V0SWJiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJOp1xSSSYKwOq%2FJKtwD8aqHS7QrU3mFS6Jaj4uRcqahTl3MNAjH2HINjRkLmj4fmtEqjn2P2zfqKef4hRA5xYv%2FfaGx4XPyBV2c8TGf61zVa2g5CDCBqUfIPqoV0lQ%2FJjeaa7%2FksNAw%2B3Y%2BFu57HYmpSFcATIFnQGrZEaeflL%2F4SC11sEJb7dfn26U%2FWZURpxNaRrfAnsQN1ez9qzsfKgVm%2Fp9pGdiypK2%2B%2Fzva1xHVWuZfBPLS1QX7fByumjjJu5dvqGTbtn%2FL%2F8BkZrH72pEbdCyjTW8GkauVtLFvD4t%2FPTNlppvpdCTBgo8mDpaYX25ESPGCT3bWWpcm9JZ3rXXzA97ofXzDpdRM8cqS6DCBq%2BhkZFz%2FA9shlzhG0A66W%2B%2FxDN6rT2Ql1JyGpe9uEe81Xbzc4rbPrMarlGRosrAa%2BYd6xoG9uPOpPCW1PQK3G7FqxOdhQ7o25qFl4fRDRokk3xHms7WX%2FwXF746EqnATU5qcE%2BkWZ4nGtD9EImHJJ9jy2QPmuYsNbIAvFTx1R6xoe8QfhnmrYOETv%2FjK0uo13RtYa%2BAa3VrMEcdQseDYL5ioIKn%2FBs%2FDTkfKxzKpcPjM%2FSpSDbNSvYvG%2FYSjziH19SzlVczaCOd4yiljjRPm6SnjsO1giwnG4Osw5K6twQY6pgEQS6iJ94RmHybVvx0DnBVrnsnCiYvKVH1%2B%2FHE7AGt7FShTq78NZ%2F1UVRAdLyCr7RrwSLLVP1eDxkNVrbp%2FFVLnADiUfYDKIUNNW%2FWJTkSgelEGS%2B43gZc14YDSLnBE5TihTF3OXk73eYlqPlaMv4jQzbiJCTysOkM2IUHecDN8p7QkRUwBkAL4Gsi8kz%2FcGybdcJGdOgT%2FLnGgb4pfe9wLNj2GHm%2FS&X-Amz-Signature=daf031d3561ed57e2ea5d9ac4229fd543174ebe97eb0e3bbd77bf41dabdcc68b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYUTIJG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT8GqrqQIvytB0fzdV%2Fk97Xw8JLxZyvAiQcgYJna3IhAiACJQfyfX%2BqyMbIm6115TtUSfUfVKavV6sU2P85V0SWJiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJOp1xSSSYKwOq%2FJKtwD8aqHS7QrU3mFS6Jaj4uRcqahTl3MNAjH2HINjRkLmj4fmtEqjn2P2zfqKef4hRA5xYv%2FfaGx4XPyBV2c8TGf61zVa2g5CDCBqUfIPqoV0lQ%2FJjeaa7%2FksNAw%2B3Y%2BFu57HYmpSFcATIFnQGrZEaeflL%2F4SC11sEJb7dfn26U%2FWZURpxNaRrfAnsQN1ez9qzsfKgVm%2Fp9pGdiypK2%2B%2Fzva1xHVWuZfBPLS1QX7fByumjjJu5dvqGTbtn%2FL%2F8BkZrH72pEbdCyjTW8GkauVtLFvD4t%2FPTNlppvpdCTBgo8mDpaYX25ESPGCT3bWWpcm9JZ3rXXzA97ofXzDpdRM8cqS6DCBq%2BhkZFz%2FA9shlzhG0A66W%2B%2FxDN6rT2Ql1JyGpe9uEe81Xbzc4rbPrMarlGRosrAa%2BYd6xoG9uPOpPCW1PQK3G7FqxOdhQ7o25qFl4fRDRokk3xHms7WX%2FwXF746EqnATU5qcE%2BkWZ4nGtD9EImHJJ9jy2QPmuYsNbIAvFTx1R6xoe8QfhnmrYOETv%2FjK0uo13RtYa%2BAa3VrMEcdQseDYL5ioIKn%2FBs%2FDTkfKxzKpcPjM%2FSpSDbNSvYvG%2FYSjziH19SzlVczaCOd4yiljjRPm6SnjsO1giwnG4Osw5K6twQY6pgEQS6iJ94RmHybVvx0DnBVrnsnCiYvKVH1%2B%2FHE7AGt7FShTq78NZ%2F1UVRAdLyCr7RrwSLLVP1eDxkNVrbp%2FFVLnADiUfYDKIUNNW%2FWJTkSgelEGS%2B43gZc14YDSLnBE5TihTF3OXk73eYlqPlaMv4jQzbiJCTysOkM2IUHecDN8p7QkRUwBkAL4Gsi8kz%2FcGybdcJGdOgT%2FLnGgb4pfe9wLNj2GHm%2FS&X-Amz-Signature=31547bb0d25b3555129b1e3c308b3bfc2315a373211899a89b8c60b181b41cde&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYUTIJG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT8GqrqQIvytB0fzdV%2Fk97Xw8JLxZyvAiQcgYJna3IhAiACJQfyfX%2BqyMbIm6115TtUSfUfVKavV6sU2P85V0SWJiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJOp1xSSSYKwOq%2FJKtwD8aqHS7QrU3mFS6Jaj4uRcqahTl3MNAjH2HINjRkLmj4fmtEqjn2P2zfqKef4hRA5xYv%2FfaGx4XPyBV2c8TGf61zVa2g5CDCBqUfIPqoV0lQ%2FJjeaa7%2FksNAw%2B3Y%2BFu57HYmpSFcATIFnQGrZEaeflL%2F4SC11sEJb7dfn26U%2FWZURpxNaRrfAnsQN1ez9qzsfKgVm%2Fp9pGdiypK2%2B%2Fzva1xHVWuZfBPLS1QX7fByumjjJu5dvqGTbtn%2FL%2F8BkZrH72pEbdCyjTW8GkauVtLFvD4t%2FPTNlppvpdCTBgo8mDpaYX25ESPGCT3bWWpcm9JZ3rXXzA97ofXzDpdRM8cqS6DCBq%2BhkZFz%2FA9shlzhG0A66W%2B%2FxDN6rT2Ql1JyGpe9uEe81Xbzc4rbPrMarlGRosrAa%2BYd6xoG9uPOpPCW1PQK3G7FqxOdhQ7o25qFl4fRDRokk3xHms7WX%2FwXF746EqnATU5qcE%2BkWZ4nGtD9EImHJJ9jy2QPmuYsNbIAvFTx1R6xoe8QfhnmrYOETv%2FjK0uo13RtYa%2BAa3VrMEcdQseDYL5ioIKn%2FBs%2FDTkfKxzKpcPjM%2FSpSDbNSvYvG%2FYSjziH19SzlVczaCOd4yiljjRPm6SnjsO1giwnG4Osw5K6twQY6pgEQS6iJ94RmHybVvx0DnBVrnsnCiYvKVH1%2B%2FHE7AGt7FShTq78NZ%2F1UVRAdLyCr7RrwSLLVP1eDxkNVrbp%2FFVLnADiUfYDKIUNNW%2FWJTkSgelEGS%2B43gZc14YDSLnBE5TihTF3OXk73eYlqPlaMv4jQzbiJCTysOkM2IUHecDN8p7QkRUwBkAL4Gsi8kz%2FcGybdcJGdOgT%2FLnGgb4pfe9wLNj2GHm%2FS&X-Amz-Signature=2032fc9370c59872a07ce196dc251360ed4bff3b7d5857f7397f80df98d0d84b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYUTIJG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT8GqrqQIvytB0fzdV%2Fk97Xw8JLxZyvAiQcgYJna3IhAiACJQfyfX%2BqyMbIm6115TtUSfUfVKavV6sU2P85V0SWJiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJOp1xSSSYKwOq%2FJKtwD8aqHS7QrU3mFS6Jaj4uRcqahTl3MNAjH2HINjRkLmj4fmtEqjn2P2zfqKef4hRA5xYv%2FfaGx4XPyBV2c8TGf61zVa2g5CDCBqUfIPqoV0lQ%2FJjeaa7%2FksNAw%2B3Y%2BFu57HYmpSFcATIFnQGrZEaeflL%2F4SC11sEJb7dfn26U%2FWZURpxNaRrfAnsQN1ez9qzsfKgVm%2Fp9pGdiypK2%2B%2Fzva1xHVWuZfBPLS1QX7fByumjjJu5dvqGTbtn%2FL%2F8BkZrH72pEbdCyjTW8GkauVtLFvD4t%2FPTNlppvpdCTBgo8mDpaYX25ESPGCT3bWWpcm9JZ3rXXzA97ofXzDpdRM8cqS6DCBq%2BhkZFz%2FA9shlzhG0A66W%2B%2FxDN6rT2Ql1JyGpe9uEe81Xbzc4rbPrMarlGRosrAa%2BYd6xoG9uPOpPCW1PQK3G7FqxOdhQ7o25qFl4fRDRokk3xHms7WX%2FwXF746EqnATU5qcE%2BkWZ4nGtD9EImHJJ9jy2QPmuYsNbIAvFTx1R6xoe8QfhnmrYOETv%2FjK0uo13RtYa%2BAa3VrMEcdQseDYL5ioIKn%2FBs%2FDTkfKxzKpcPjM%2FSpSDbNSvYvG%2FYSjziH19SzlVczaCOd4yiljjRPm6SnjsO1giwnG4Osw5K6twQY6pgEQS6iJ94RmHybVvx0DnBVrnsnCiYvKVH1%2B%2FHE7AGt7FShTq78NZ%2F1UVRAdLyCr7RrwSLLVP1eDxkNVrbp%2FFVLnADiUfYDKIUNNW%2FWJTkSgelEGS%2B43gZc14YDSLnBE5TihTF3OXk73eYlqPlaMv4jQzbiJCTysOkM2IUHecDN8p7QkRUwBkAL4Gsi8kz%2FcGybdcJGdOgT%2FLnGgb4pfe9wLNj2GHm%2FS&X-Amz-Signature=64a051a93a47758051f3792a8d326c9d38c7ff7df35b7718c3a1e903037fa100&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYUTIJG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT8GqrqQIvytB0fzdV%2Fk97Xw8JLxZyvAiQcgYJna3IhAiACJQfyfX%2BqyMbIm6115TtUSfUfVKavV6sU2P85V0SWJiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJOp1xSSSYKwOq%2FJKtwD8aqHS7QrU3mFS6Jaj4uRcqahTl3MNAjH2HINjRkLmj4fmtEqjn2P2zfqKef4hRA5xYv%2FfaGx4XPyBV2c8TGf61zVa2g5CDCBqUfIPqoV0lQ%2FJjeaa7%2FksNAw%2B3Y%2BFu57HYmpSFcATIFnQGrZEaeflL%2F4SC11sEJb7dfn26U%2FWZURpxNaRrfAnsQN1ez9qzsfKgVm%2Fp9pGdiypK2%2B%2Fzva1xHVWuZfBPLS1QX7fByumjjJu5dvqGTbtn%2FL%2F8BkZrH72pEbdCyjTW8GkauVtLFvD4t%2FPTNlppvpdCTBgo8mDpaYX25ESPGCT3bWWpcm9JZ3rXXzA97ofXzDpdRM8cqS6DCBq%2BhkZFz%2FA9shlzhG0A66W%2B%2FxDN6rT2Ql1JyGpe9uEe81Xbzc4rbPrMarlGRosrAa%2BYd6xoG9uPOpPCW1PQK3G7FqxOdhQ7o25qFl4fRDRokk3xHms7WX%2FwXF746EqnATU5qcE%2BkWZ4nGtD9EImHJJ9jy2QPmuYsNbIAvFTx1R6xoe8QfhnmrYOETv%2FjK0uo13RtYa%2BAa3VrMEcdQseDYL5ioIKn%2FBs%2FDTkfKxzKpcPjM%2FSpSDbNSvYvG%2FYSjziH19SzlVczaCOd4yiljjRPm6SnjsO1giwnG4Osw5K6twQY6pgEQS6iJ94RmHybVvx0DnBVrnsnCiYvKVH1%2B%2FHE7AGt7FShTq78NZ%2F1UVRAdLyCr7RrwSLLVP1eDxkNVrbp%2FFVLnADiUfYDKIUNNW%2FWJTkSgelEGS%2B43gZc14YDSLnBE5TihTF3OXk73eYlqPlaMv4jQzbiJCTysOkM2IUHecDN8p7QkRUwBkAL4Gsi8kz%2FcGybdcJGdOgT%2FLnGgb4pfe9wLNj2GHm%2FS&X-Amz-Signature=28f5a6d4897401e5d8ccba65aa0a99738523f37e7e7ab88d587ef2e7c6008515&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYUTIJG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT8GqrqQIvytB0fzdV%2Fk97Xw8JLxZyvAiQcgYJna3IhAiACJQfyfX%2BqyMbIm6115TtUSfUfVKavV6sU2P85V0SWJiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJOp1xSSSYKwOq%2FJKtwD8aqHS7QrU3mFS6Jaj4uRcqahTl3MNAjH2HINjRkLmj4fmtEqjn2P2zfqKef4hRA5xYv%2FfaGx4XPyBV2c8TGf61zVa2g5CDCBqUfIPqoV0lQ%2FJjeaa7%2FksNAw%2B3Y%2BFu57HYmpSFcATIFnQGrZEaeflL%2F4SC11sEJb7dfn26U%2FWZURpxNaRrfAnsQN1ez9qzsfKgVm%2Fp9pGdiypK2%2B%2Fzva1xHVWuZfBPLS1QX7fByumjjJu5dvqGTbtn%2FL%2F8BkZrH72pEbdCyjTW8GkauVtLFvD4t%2FPTNlppvpdCTBgo8mDpaYX25ESPGCT3bWWpcm9JZ3rXXzA97ofXzDpdRM8cqS6DCBq%2BhkZFz%2FA9shlzhG0A66W%2B%2FxDN6rT2Ql1JyGpe9uEe81Xbzc4rbPrMarlGRosrAa%2BYd6xoG9uPOpPCW1PQK3G7FqxOdhQ7o25qFl4fRDRokk3xHms7WX%2FwXF746EqnATU5qcE%2BkWZ4nGtD9EImHJJ9jy2QPmuYsNbIAvFTx1R6xoe8QfhnmrYOETv%2FjK0uo13RtYa%2BAa3VrMEcdQseDYL5ioIKn%2FBs%2FDTkfKxzKpcPjM%2FSpSDbNSvYvG%2FYSjziH19SzlVczaCOd4yiljjRPm6SnjsO1giwnG4Osw5K6twQY6pgEQS6iJ94RmHybVvx0DnBVrnsnCiYvKVH1%2B%2FHE7AGt7FShTq78NZ%2F1UVRAdLyCr7RrwSLLVP1eDxkNVrbp%2FFVLnADiUfYDKIUNNW%2FWJTkSgelEGS%2B43gZc14YDSLnBE5TihTF3OXk73eYlqPlaMv4jQzbiJCTysOkM2IUHecDN8p7QkRUwBkAL4Gsi8kz%2FcGybdcJGdOgT%2FLnGgb4pfe9wLNj2GHm%2FS&X-Amz-Signature=99b9ed03f62e09e343bfc76632f0a729fe413ceae326da264c8e312e66fc161a&X-Amz-SignedHeaders=host&x-id=GetObject)
