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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZ34RE6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAe6CTwMr5qY54DwL5Tv9Qx9eM9opjEfxACBot%2BP7GXwIhAPs9uhhgjFeSpu7EfhoGD3ZXFWUkZvPcBtxX%2F2otFSRjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgQ3lUqyQG%2BeqRIWUq3APVO1YH873gh0ntzpfd3AU%2FG8E1IaalMeWBnOVbfE4j%2Fu4VsV0cAIInmM%2FtFMnDFZKCestE%2B9taCEWLQGVaziai%2BKNFAhKJserlCF1WTNWGGlRQZvZRiuXyiH9lCpe1eQAYHcnmifuHEaWu9A%2Fbdsv1GMJlhRjxZ52ftmMROBuz8Zip%2FMDSWSwjDQtzp6i9mWvyDzClRdL38islsC7xDelZl58fVOCkt1oA91gKLc31yq8WA6J2oz0DVVj7mwbV2I3Urk8ufIM5B3%2B4TBptbgq2d53PVepG%2FrknWuLvKsPQGgIfFWY83%2BoELSag92o%2BKYhFR1wfNmPM00d9Exczqey%2B%2Bfp7tOPxcsKAnR%2FUfjNqxeBeZdgUJytJmDKnfw9prch%2BU5CVRTMj%2FeknrDk2MAqclJyKHVytYac%2Byn9L9cYBAznKrlZV3Stc4Z1BHlBtI5n9pVQOZ7bz4ihbrQ5hKmhzbdqlh9o%2B2AwQTMp2OBYqt1TIch0GsjFAQBefTBvmoHiUK6O%2BzdN96ogz9uuFnTTz6sTMw%2BnRHLP3Eawg2cYK1oL8XN%2FvVa8p1vji1sAJgHk90VPeqJ8XEQrYh3ciTpsYOCn8htsHLsd%2Bt4aI7fhBgmPBtpKmIo47j%2Bq4SjCX6bq%2FBjqkAbQUiQgMzarX%2FWbCCI0AHDaCkZEg%2BjnxkFlHYldoGgi2xrEoNSksA2cUb8NNama2vAlGffDWUVgWFPGpemeSzfMNtUANQ8hYNPLkePFkzG684rlGTGeL3zC6phkqNXdvEEVPlWJND%2BgK8eq3tSJK8EJXM8pHPfShNZ9JM%2F49M4ccuT%2BnrrCMdLimpYWcVu7t0GRN9RyllhmkLQjQVsUEzzBsbOcK&X-Amz-Signature=f4c0118f8e0573f056aeb273ecb211b124009f6bba20eaaab87a73b659ddb318&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZ34RE6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAe6CTwMr5qY54DwL5Tv9Qx9eM9opjEfxACBot%2BP7GXwIhAPs9uhhgjFeSpu7EfhoGD3ZXFWUkZvPcBtxX%2F2otFSRjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgQ3lUqyQG%2BeqRIWUq3APVO1YH873gh0ntzpfd3AU%2FG8E1IaalMeWBnOVbfE4j%2Fu4VsV0cAIInmM%2FtFMnDFZKCestE%2B9taCEWLQGVaziai%2BKNFAhKJserlCF1WTNWGGlRQZvZRiuXyiH9lCpe1eQAYHcnmifuHEaWu9A%2Fbdsv1GMJlhRjxZ52ftmMROBuz8Zip%2FMDSWSwjDQtzp6i9mWvyDzClRdL38islsC7xDelZl58fVOCkt1oA91gKLc31yq8WA6J2oz0DVVj7mwbV2I3Urk8ufIM5B3%2B4TBptbgq2d53PVepG%2FrknWuLvKsPQGgIfFWY83%2BoELSag92o%2BKYhFR1wfNmPM00d9Exczqey%2B%2Bfp7tOPxcsKAnR%2FUfjNqxeBeZdgUJytJmDKnfw9prch%2BU5CVRTMj%2FeknrDk2MAqclJyKHVytYac%2Byn9L9cYBAznKrlZV3Stc4Z1BHlBtI5n9pVQOZ7bz4ihbrQ5hKmhzbdqlh9o%2B2AwQTMp2OBYqt1TIch0GsjFAQBefTBvmoHiUK6O%2BzdN96ogz9uuFnTTz6sTMw%2BnRHLP3Eawg2cYK1oL8XN%2FvVa8p1vji1sAJgHk90VPeqJ8XEQrYh3ciTpsYOCn8htsHLsd%2Bt4aI7fhBgmPBtpKmIo47j%2Bq4SjCX6bq%2FBjqkAbQUiQgMzarX%2FWbCCI0AHDaCkZEg%2BjnxkFlHYldoGgi2xrEoNSksA2cUb8NNama2vAlGffDWUVgWFPGpemeSzfMNtUANQ8hYNPLkePFkzG684rlGTGeL3zC6phkqNXdvEEVPlWJND%2BgK8eq3tSJK8EJXM8pHPfShNZ9JM%2F49M4ccuT%2BnrrCMdLimpYWcVu7t0GRN9RyllhmkLQjQVsUEzzBsbOcK&X-Amz-Signature=c9d4d5a77e6c8c37119330d439aa1ed34f8ac36fbf2c41f49e8c0e28f839fd86&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZ34RE6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAe6CTwMr5qY54DwL5Tv9Qx9eM9opjEfxACBot%2BP7GXwIhAPs9uhhgjFeSpu7EfhoGD3ZXFWUkZvPcBtxX%2F2otFSRjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgQ3lUqyQG%2BeqRIWUq3APVO1YH873gh0ntzpfd3AU%2FG8E1IaalMeWBnOVbfE4j%2Fu4VsV0cAIInmM%2FtFMnDFZKCestE%2B9taCEWLQGVaziai%2BKNFAhKJserlCF1WTNWGGlRQZvZRiuXyiH9lCpe1eQAYHcnmifuHEaWu9A%2Fbdsv1GMJlhRjxZ52ftmMROBuz8Zip%2FMDSWSwjDQtzp6i9mWvyDzClRdL38islsC7xDelZl58fVOCkt1oA91gKLc31yq8WA6J2oz0DVVj7mwbV2I3Urk8ufIM5B3%2B4TBptbgq2d53PVepG%2FrknWuLvKsPQGgIfFWY83%2BoELSag92o%2BKYhFR1wfNmPM00d9Exczqey%2B%2Bfp7tOPxcsKAnR%2FUfjNqxeBeZdgUJytJmDKnfw9prch%2BU5CVRTMj%2FeknrDk2MAqclJyKHVytYac%2Byn9L9cYBAznKrlZV3Stc4Z1BHlBtI5n9pVQOZ7bz4ihbrQ5hKmhzbdqlh9o%2B2AwQTMp2OBYqt1TIch0GsjFAQBefTBvmoHiUK6O%2BzdN96ogz9uuFnTTz6sTMw%2BnRHLP3Eawg2cYK1oL8XN%2FvVa8p1vji1sAJgHk90VPeqJ8XEQrYh3ciTpsYOCn8htsHLsd%2Bt4aI7fhBgmPBtpKmIo47j%2Bq4SjCX6bq%2FBjqkAbQUiQgMzarX%2FWbCCI0AHDaCkZEg%2BjnxkFlHYldoGgi2xrEoNSksA2cUb8NNama2vAlGffDWUVgWFPGpemeSzfMNtUANQ8hYNPLkePFkzG684rlGTGeL3zC6phkqNXdvEEVPlWJND%2BgK8eq3tSJK8EJXM8pHPfShNZ9JM%2F49M4ccuT%2BnrrCMdLimpYWcVu7t0GRN9RyllhmkLQjQVsUEzzBsbOcK&X-Amz-Signature=dd1b85af97f168b94caa51d84c8805943e0afb9a847741b8880d1be77c4f8518&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZ34RE6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAe6CTwMr5qY54DwL5Tv9Qx9eM9opjEfxACBot%2BP7GXwIhAPs9uhhgjFeSpu7EfhoGD3ZXFWUkZvPcBtxX%2F2otFSRjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgQ3lUqyQG%2BeqRIWUq3APVO1YH873gh0ntzpfd3AU%2FG8E1IaalMeWBnOVbfE4j%2Fu4VsV0cAIInmM%2FtFMnDFZKCestE%2B9taCEWLQGVaziai%2BKNFAhKJserlCF1WTNWGGlRQZvZRiuXyiH9lCpe1eQAYHcnmifuHEaWu9A%2Fbdsv1GMJlhRjxZ52ftmMROBuz8Zip%2FMDSWSwjDQtzp6i9mWvyDzClRdL38islsC7xDelZl58fVOCkt1oA91gKLc31yq8WA6J2oz0DVVj7mwbV2I3Urk8ufIM5B3%2B4TBptbgq2d53PVepG%2FrknWuLvKsPQGgIfFWY83%2BoELSag92o%2BKYhFR1wfNmPM00d9Exczqey%2B%2Bfp7tOPxcsKAnR%2FUfjNqxeBeZdgUJytJmDKnfw9prch%2BU5CVRTMj%2FeknrDk2MAqclJyKHVytYac%2Byn9L9cYBAznKrlZV3Stc4Z1BHlBtI5n9pVQOZ7bz4ihbrQ5hKmhzbdqlh9o%2B2AwQTMp2OBYqt1TIch0GsjFAQBefTBvmoHiUK6O%2BzdN96ogz9uuFnTTz6sTMw%2BnRHLP3Eawg2cYK1oL8XN%2FvVa8p1vji1sAJgHk90VPeqJ8XEQrYh3ciTpsYOCn8htsHLsd%2Bt4aI7fhBgmPBtpKmIo47j%2Bq4SjCX6bq%2FBjqkAbQUiQgMzarX%2FWbCCI0AHDaCkZEg%2BjnxkFlHYldoGgi2xrEoNSksA2cUb8NNama2vAlGffDWUVgWFPGpemeSzfMNtUANQ8hYNPLkePFkzG684rlGTGeL3zC6phkqNXdvEEVPlWJND%2BgK8eq3tSJK8EJXM8pHPfShNZ9JM%2F49M4ccuT%2BnrrCMdLimpYWcVu7t0GRN9RyllhmkLQjQVsUEzzBsbOcK&X-Amz-Signature=36c2cd2de9496024dca96417041bc772789b8b7af0eb84d2d98504e87f78e266&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZ34RE6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAe6CTwMr5qY54DwL5Tv9Qx9eM9opjEfxACBot%2BP7GXwIhAPs9uhhgjFeSpu7EfhoGD3ZXFWUkZvPcBtxX%2F2otFSRjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgQ3lUqyQG%2BeqRIWUq3APVO1YH873gh0ntzpfd3AU%2FG8E1IaalMeWBnOVbfE4j%2Fu4VsV0cAIInmM%2FtFMnDFZKCestE%2B9taCEWLQGVaziai%2BKNFAhKJserlCF1WTNWGGlRQZvZRiuXyiH9lCpe1eQAYHcnmifuHEaWu9A%2Fbdsv1GMJlhRjxZ52ftmMROBuz8Zip%2FMDSWSwjDQtzp6i9mWvyDzClRdL38islsC7xDelZl58fVOCkt1oA91gKLc31yq8WA6J2oz0DVVj7mwbV2I3Urk8ufIM5B3%2B4TBptbgq2d53PVepG%2FrknWuLvKsPQGgIfFWY83%2BoELSag92o%2BKYhFR1wfNmPM00d9Exczqey%2B%2Bfp7tOPxcsKAnR%2FUfjNqxeBeZdgUJytJmDKnfw9prch%2BU5CVRTMj%2FeknrDk2MAqclJyKHVytYac%2Byn9L9cYBAznKrlZV3Stc4Z1BHlBtI5n9pVQOZ7bz4ihbrQ5hKmhzbdqlh9o%2B2AwQTMp2OBYqt1TIch0GsjFAQBefTBvmoHiUK6O%2BzdN96ogz9uuFnTTz6sTMw%2BnRHLP3Eawg2cYK1oL8XN%2FvVa8p1vji1sAJgHk90VPeqJ8XEQrYh3ciTpsYOCn8htsHLsd%2Bt4aI7fhBgmPBtpKmIo47j%2Bq4SjCX6bq%2FBjqkAbQUiQgMzarX%2FWbCCI0AHDaCkZEg%2BjnxkFlHYldoGgi2xrEoNSksA2cUb8NNama2vAlGffDWUVgWFPGpemeSzfMNtUANQ8hYNPLkePFkzG684rlGTGeL3zC6phkqNXdvEEVPlWJND%2BgK8eq3tSJK8EJXM8pHPfShNZ9JM%2F49M4ccuT%2BnrrCMdLimpYWcVu7t0GRN9RyllhmkLQjQVsUEzzBsbOcK&X-Amz-Signature=9a42e3479375d3a4ddec822b97f8172f27e4ee67bf74d4fc2a14c29d70e39684&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZ34RE6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAe6CTwMr5qY54DwL5Tv9Qx9eM9opjEfxACBot%2BP7GXwIhAPs9uhhgjFeSpu7EfhoGD3ZXFWUkZvPcBtxX%2F2otFSRjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgQ3lUqyQG%2BeqRIWUq3APVO1YH873gh0ntzpfd3AU%2FG8E1IaalMeWBnOVbfE4j%2Fu4VsV0cAIInmM%2FtFMnDFZKCestE%2B9taCEWLQGVaziai%2BKNFAhKJserlCF1WTNWGGlRQZvZRiuXyiH9lCpe1eQAYHcnmifuHEaWu9A%2Fbdsv1GMJlhRjxZ52ftmMROBuz8Zip%2FMDSWSwjDQtzp6i9mWvyDzClRdL38islsC7xDelZl58fVOCkt1oA91gKLc31yq8WA6J2oz0DVVj7mwbV2I3Urk8ufIM5B3%2B4TBptbgq2d53PVepG%2FrknWuLvKsPQGgIfFWY83%2BoELSag92o%2BKYhFR1wfNmPM00d9Exczqey%2B%2Bfp7tOPxcsKAnR%2FUfjNqxeBeZdgUJytJmDKnfw9prch%2BU5CVRTMj%2FeknrDk2MAqclJyKHVytYac%2Byn9L9cYBAznKrlZV3Stc4Z1BHlBtI5n9pVQOZ7bz4ihbrQ5hKmhzbdqlh9o%2B2AwQTMp2OBYqt1TIch0GsjFAQBefTBvmoHiUK6O%2BzdN96ogz9uuFnTTz6sTMw%2BnRHLP3Eawg2cYK1oL8XN%2FvVa8p1vji1sAJgHk90VPeqJ8XEQrYh3ciTpsYOCn8htsHLsd%2Bt4aI7fhBgmPBtpKmIo47j%2Bq4SjCX6bq%2FBjqkAbQUiQgMzarX%2FWbCCI0AHDaCkZEg%2BjnxkFlHYldoGgi2xrEoNSksA2cUb8NNama2vAlGffDWUVgWFPGpemeSzfMNtUANQ8hYNPLkePFkzG684rlGTGeL3zC6phkqNXdvEEVPlWJND%2BgK8eq3tSJK8EJXM8pHPfShNZ9JM%2F49M4ccuT%2BnrrCMdLimpYWcVu7t0GRN9RyllhmkLQjQVsUEzzBsbOcK&X-Amz-Signature=096577abb99d78e0075280c7325f794e3da37a4e1baff0c7379319de0a1a56ac&X-Amz-SignedHeaders=host&x-id=GetObject)
